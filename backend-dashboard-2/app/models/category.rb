class Category
  include Mongoid::Document
  include Mongoid::Timestamps
  field :name, type: String
  
  has_many :certificate_categories, class_name: 'CertificateCategories', foreign_key: 'category_id'
end
