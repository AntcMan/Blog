class BlogPost < ApplicationRecord
  # This ensures a blog title and message are present in the form
  validates :title, presence: true
  validates :body, presence: true
end
