# == Schema Information
#
# Table name: tests
#
#  id          :bigint           not null, primary key
#  string_id   :integer          not null
#  string_text :text
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#

class Test < ApplicationRecord
    validates :string_text, presence:true, uniqueness:true
    belongs_to :string

end
