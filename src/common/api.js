import BaseService from './base-service';
import UserService from './user-service';
import TopicService from './topic-service';
import PostService from './post-service';
import CommentService from './comment-service';
import LikeService from './like-service';
import ReplyService from './reply-service';
import FollowService from './follow-service';
import NoticeService from './notice-service';
import Cities from './cities';

export { weibo_emojis } from "./base-service";
export const Base = new BaseService();
export const User = new UserService();
export const Topic = new TopicService();
export const Post = new PostService();
export const Comment = new CommentService();
export const Like = new LikeService();
export const Reply = new ReplyService();
export const Follow = new FollowService();
export const Notice = new NoticeService();
export const Province = Cities;

