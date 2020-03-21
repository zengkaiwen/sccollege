import BaseService from './base-service';
import UserService from './user-service';
import TopicService from './topic-service';
import Cities from './cities';

export { weibo_emojis } from "./base-service";
export const Base = new BaseService();
export const User = new UserService();
export const Topic = new TopicService();
export const Province = Cities;

