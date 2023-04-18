class Certificate
  include Mongoid::Document
  include Mongoid::Timestamps

  field :name, type: String
  field :type, type: String
  field :expiration_date, type: Date

  validates :name,
  presence: true,
  length: { minimum: 3 }

  validates :type,
  presence: true,
  inclusion: {
    in: %w(ibm industry),
    message: "must be either ibm or industry"
  }
end
