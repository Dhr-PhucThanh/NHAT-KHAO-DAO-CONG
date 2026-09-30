import React, { useState } from 'react';

interface CriterionCardProps {
  initialTitle?: string;
  initialContent?: string;
  onSave?: (data: { title: string; content: string }) => void;
}

export const CriterionCard: React.FC<CriterionCardProps> = ({
  initialTitle = '',
  initialContent = '',
  onSave,
}) => {
  const [title, setTitle] = useState(initialTitle);
  const [content, setContent] = useState(initialContent);
  const [isSaved, setIsSaved] = useState(false);

  // Hàm xử lý sự kiện bấm Lưu an toàn (Tránh hoàn toàn lỗi vòng lặp render #185)
  const handleSaveClick = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Thực hiện gọi hàm lưu truyền từ component cha nếu có
    if (onSave) {
      onSave({ title, content });
    }

    // Đánh dấu đã lưu thành công mà không gây trigger render lặp lại vô hạn
    setIsSaved(true);
    setTimeout(() => setIsSaved(false), 3000); // Ẩn thông báo sau 3 giây
  };

  return (
    <div className="p-4 bg-white rounded-lg shadow-md border border-gray-200 max-w-lg mx-auto my-4">
      <h3 className="text-lg font-bold mb-3 text-gray-800">Phiếu Thông Tin - Nhật Khảo Đạo Công</h3>
      
      <form onSubmit={handleSaveClick}>
        <div className="mb-3">
          <label className="block text-sm font-medium text-gray-700 mb-1">Tiêu đề:</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Nhập tiêu đề phiếu..."
            required
          />
        </div>

        <div className="mb-3">
          <label className="block text-sm font-medium text-gray-700 mb-1">Nội dung:</label>
          <textarea
            value={content}
            onChange={(e) => setContent(e.target.value)}
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            rows={4}
            placeholder="Nhập nội dung thông tin..."
            required
          />
        </div>

        <div className="flex items-center justify-between">
          <button
            type="submit"
            className="px-4 py-2 bg-blue-600 text-white font-semibold rounded-md hover:bg-blue-700 transition"
          >
            Lưu Thông Tin
          </button>

          {isSaved && (
            <span className="text-green-600 text-sm font-medium animate-pulse">
              Đã lưu thành công!
            </span>
          )}
        </div>
      </form>
    </div>
  );
};

export default CriterionCard;
