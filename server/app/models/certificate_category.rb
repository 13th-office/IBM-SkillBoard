class CertificateCategory
  include Mongoid::Document
  include Mongoid::Timestamps
  field :certificate_id, type: String
  field :category_id, type: String

  belongs_to :certificate
  belongs_to :category

  def self.most_frequent_categories(limit)
    self.collection.aggregate([
      { "$group" => { "_id" => "$category_id", "count" => { "$sum" => 1 } } },
      { "$sort" => { "count" => -1 } },
      { "$limit" => limit }
    ])
  end
end
