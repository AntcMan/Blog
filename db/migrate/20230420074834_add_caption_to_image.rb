class AddCaptionToImage < ActiveRecord::Migration[7.0]
  def change
    add_column :action_text_rich_texts, :cover_caption, :string
  end
end
