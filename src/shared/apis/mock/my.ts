import ImgBannerExample from '@img/img-banner-example.png';
import ImgPostExampleTwo from '@img/img-post-example-two.png';
import ImgPostExampleThree from '@img/img-post-example-three.png';
import ImgPostExampleFour from '@img/img-post-example-four.png';
import ImgPostExampleFive from '@img/img-post-example-five.png';
import ImgPostExampleSix from '@img/img-post-example-six.png';

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
