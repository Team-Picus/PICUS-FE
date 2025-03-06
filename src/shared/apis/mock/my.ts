import ImgBannerExample from '@img/img-banner-example.png';
import ImgPostExampleTwo from '@img/img-post-example-two.png';
import ImgPostExampleThree from '@img/img-post-example-three.png';
import ImgPostExampleFour from '@img/img-post-example-four.png';
import ImgPostExampleFive from '@img/img-post-example-five.png';
import ImgPostExampleSix from '@img/img-post-example-six.png';
import { ReviewResponse } from '@shared/types/my/review.ts';
import ImgReviewProfile from '@img/img-review-profile.png';
import ImgReviewOne from '@img/img-review-one.png';
import ImgReviewTwo from '@img/img-review-two.png';
import ImgReviewThree from '@img/img-review-three.png';
import ImgReviewFour from '@img/img-review-four.png';
import ImgReviewFive from '@img/img-review-five.png';

export const categories = [
  {
    category: '전체',
    count: 14,
  },
  {
    category: '개인프로필',
    count: 12,
  },
  {
    category: '우정 연인',
    count: 2,
  },
  {
    category: '빈티지',
    count: 14,
  },
  {
    category: '몽환적인',
    count: 12,
  },
];

export interface Post {
  id: number;
  title: string;
  todayAvailable: boolean;
  imageUrl: string;
}

export const postList: Post[] = [
  {
    id: 0,
    title: '낙원(樂園)',
    todayAvailable: true,
    imageUrl: ImgBannerExample,
  },
  {
    id: 1,
    title: '누구나 나른한 하루가 있잖아',
    todayAvailable: false,
    imageUrl: ImgPostExampleTwo,
  },
  {
    id: 2,
    title: '소원',
    todayAvailable: true,
    imageUrl: ImgPostExampleThree,
  },
  {
    id: 3,
    title: 'アオハル, 青春',
    todayAvailable: false,
    imageUrl: ImgPostExampleFour,
  },
  {
    id: 4,
    title: '평범한 일상 속',
    todayAvailable: false,
    imageUrl: ImgPostExampleFive,
  },
  {
    id: 5,
    title: '부드러운 시선',
    todayAvailable: true,
    imageUrl: ImgPostExampleSix,
  },
];

export const reviews: ReviewResponse[] = [
  {
    id: 1,
    nickname: 'skrud_12',
    content:
      '급하게 스냅을 해야지 마음먹어서 작가님 섭외가 정말 어려웠습니다. 그렇게 찾다가 알게된 아랑스냅 토요일 야간과 일요일 주간촬영 중 고민하다가~ 그래도 꽃을 보이게 찍으려면 낮이 좋을거 같아서 일요일',
    profileImage: ImgReviewProfile,
    rate: 5,
    imageList: [ImgReviewFour, ImgReviewFive],
    createdAt: '2025-08-30',
  },
  {
    id: 2,
    nickname: 'chlrh00',
    content:
      '급하게 스냅을 해야지 마음먹어서 작가님 섭외가 정말 어려웠습니다. 그렇게 찾다가 알게된 아랑스냅 토요일 야간과 일요일 주간촬영 중 고민하다가~ 그래도 꽃을 보이게 찍으려면 낮이 좋을거 같아서 일요일으로 부탁드렸더니 해주셨어요.',
    profileImage: ImgReviewProfile,
    rate: 4,
    imageList: [ImgReviewOne, ImgReviewTwo, ImgReviewThree],
    createdAt: '2025.08.26',
  },
  {
    id: 3,
    nickname: '플리즈랑',
    content:
      '급하게 스냅을 해야지 마음먹어서 작가님 섭외가 정말 어려웠습니다. 그렇게 찾다가 알게된 아랑스냅 토요일 야간과 일요일 주간촬영 중 고민하다가~ 그래도 꽃을 보이게 찍으려면 낮이 좋을거 같아서 일요일',
    profileImage: ImgReviewProfile,
    rate: 3,
    imageList: [],
    createdAt: '2021-08-13',
  },
  {
    id: 4,
    nickname: '테스트4',
    content: '테스트4 리뷰입니다.',
    profileImage: ImgReviewProfile,
    rate: 5,
    imageList: [],
    createdAt: '2021-07-04',
  },
  {
    id: 5,
    nickname: '테스트5',
    content: '테스트5 리뷰입니다.',
    profileImage: ImgReviewProfile,
    rate: 4,
    imageList: [],
    createdAt: '2021-07-05',
  },
];
