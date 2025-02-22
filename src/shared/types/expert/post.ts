// 게시물 데이터 타입 정의
export interface Post {
  id: number;
  image: string;
  title: string;
  authorId: string;
  price: number;
  likes: number;
  liked: boolean; // 유저가 좋아요를 눌렀는지 여부
  views: number;
  tags: string[];
  isTodayAvailable: boolean;
}
