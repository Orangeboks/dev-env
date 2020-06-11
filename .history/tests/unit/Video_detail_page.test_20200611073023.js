import { shallowMount } from '@vue/test-utils';
import Video_detail_page from './video_detail_page.vue';
import './common/localStorageMock';

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
									video_id: 1,
									video_url: 'https://url.com',
									comments: [],
								},
							},
						]);
						cb(value);
					}),
					push: jest.fn(data => {
						return Promise.resolve(true);
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

describe('video_details_page.vue', () => {
	const wrapper = shallowMount(Video_detail_page);
	it('matches snapshot', () => {
		expect(wrapper.html()).toMatchSnapshot();
	});

	it('save comment', () => {
		wrapper.setData({
			videoId: 1,
			comment: 'my comment',
		});
		wrapper.vm.savecomment();
	});
});
