class CertificateCategory
  include Mongoid::Document
  include Mongoid::Timestamps
  field :certificate_id, type: String
  field :category_id, type: String
end
