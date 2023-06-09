class Category
  include Mongoid::Document
  include Mongoid::Timestamps
  field :name, type: String
  
  has_many :certificate_categories, class_name: 'CertificateCategory', foreign_key: 'category_id'

  def info
    {
      id: self._id.to_s,
      name: self.name
    }
  end
end
