export interface ReviewResponse {
  id: number;
  nickname: string;
  content: string;
  profileImage: string;
  rate: number;
  imageList: string[];
  createdAt: string;
}
