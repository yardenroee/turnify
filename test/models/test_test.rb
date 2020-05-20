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

require 'test_helper'

class TestTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
