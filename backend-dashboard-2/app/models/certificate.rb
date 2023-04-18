class Certificate
  include Mongoid::Document
  include Mongoid::Timestamps

  field :name, type: String
  field :type, type: String
  field :expiration_date, type: Date
end
