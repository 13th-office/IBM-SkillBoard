class CertificateEmployee
  include Mongoid::Document
  include Mongoid::Timestamps
  field :employee_id, type: String
  field :certificate_id, type: String
end
