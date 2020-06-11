import { shallowMount, createLocalVue } from '@vue/test-utils';
import VueRouter from 'vue-router';
import Upload from '../../src/views/uploadvideo.vue';
import './common/localStorageMock';

const localVue = createLocalVue();
localVue.use(VueRouter);
const router = new VueRouter();

jest.mock('firebase', () => {
	const set = jest.fn();

	return {
		database: jest.fn(() => ({
			ref: jest.fn(() => ({
				push: jest.fn(() => ({
					set,
				})),
				child: jest.fn(() => ({
					once: jest.fn((key, cb) => {
						const value = {};
						value.val = jest.fn(() => [
							{
								'1': {
									email: 'test@test.com',
									password: '1234',
								},
							},
						]);
						cb(value);
					}),
				})),
			})),
		})),
		storage: jest.fn(() => ({
			ref: jest.fn(() => ({
				put: jest.fn(() => ({
					on: jest.fn(),
				})),
			})),
		})),
	};
});

describe('Upload.vue', () => {
	const wrapper = shallowMount(Upload, {
		localVue,
		router,
	});
	it('renders li for each item in props.items', () => {
		expect(wrapper.findAll('.container input')).toHaveLength(1);
	});

	it('matches snapshot', () => {
		expect(wrapper.html()).toMatchSnapshot();
	});

	it('previewImage method', () => {
		wrapper.vm.previewImage({
			target: {
				files: [
					{
						name: 'test',
					},
				],
			},
		});

		expect(wrapper.vm.uploadValue).toBe(0);
		expect(wrapper.vm.video).toBe(null);
	});

	it('login method failure', () => {
		wrapper.vm.onUpload();

		expect(wrapper.vm.video).toBe(null);
	});
});
