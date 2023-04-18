class BlogPost < ApplicationRecord
  # This ensures a blog title and message are present in the form
  has_rich_text :content
  validates :title, presence: true
  validates :content, presence: true
  attribute :published_at, :datetime

  extend friendly_id :title, use: :slugged

  def next
    BlogPost.where('id > ?', id).first
  end

  def prev
    BlogPost.where('id < ?', id).last
  end

  def should_generate_new_friendly_id?
    title_changed? || slug.blank?
  end
end
