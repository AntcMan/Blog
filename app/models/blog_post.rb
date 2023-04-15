class BlogPost < ApplicationRecord
  # This ensures a blog title and message are present in the form
  has_rich_text :content
  validates :title, presence: true
  validates :content, presence: true
  attribute :published_at, :datetime

  def next
    BlogPost.where('id > ?', id).first
  end

  def prev
    BlogPost.where('id < ?', id).last
  end
end
