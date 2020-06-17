import { shallowMount } from '@vue/test-utils';
import Login from '../../src/views/Login.vue';
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
	};
});

describe('Login.vue', () => {
	const wrapper = shallowMount(Login);
	it('renders li for each item in props.items', () => {
		expect(wrapper.findAll('.container input')).toHaveLength(2);
		expect(wrapper.findAll('.container button')).toHaveLength(1);
	});

	it('matches snapshot', () => {
		expect(wrapper.html()).toMatchSnapshot();
	});

	 it('login method success', () => {
	 	wrapper.setData({
	 		email: 'test@test.com',
	 		password: '1234',
	 	});
	 	wrapper.vm.login();
	 });

	 it('login method failure', () => {
	 	wrapper.setData({
	 		email: null,
	 		password: '1234',
	 	});
	 	wrapper.vm.login();
	 });
});
