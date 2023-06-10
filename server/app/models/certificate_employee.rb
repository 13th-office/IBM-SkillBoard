class CertificateEmployee
  include Mongoid::Document
  include Mongoid::Timestamps
  field :employee_id, type: String
  field :certificate_id, type: String

  belongs_to :certificate
  belongs_to :employee

  def self.top_certificates_team(employee_ids, limit)
    self.where(employee_id: employee_ids).collection.aggregate([
      { "$group" => { "_id" => "$certificate_id", "count" => { "$sum" => 1 } } },
      { "$sort" => { "count" => -1 } },
      { "$limit" => limit }
    ])
  end
  
end
