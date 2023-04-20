class AddCaptionToCoverImage < ActiveRecord::Migration[7.0]
  def change
    add_column :blog_posts, :caption, :string
  end
end
