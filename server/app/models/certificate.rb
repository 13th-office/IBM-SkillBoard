class Certificate
  include Mongoid::Document
  include Mongoid::Timestamps

  field :name, type: String
  field :type, type: String
  field :expiration_date, type: Date

  has_many :certificate_employees, class_name: 'CertificateEmployee', foreign_key: 'certificate_id'
  has_many :certificate_categories, class_name: 'CertificateCategory', foreign_key: 'certificate_id'

  validates :name,
  presence: true,
  length: { minimum: 3 }

  validates :type,
  presence: true,
  inclusion: {
    in: %w(ibm industry),
    message: "must be either ibm or industry"
  }

  def info
    {
      id: self._id.to_s,
      name: self.name,
      type: self.type,
      expiration_date: self.expiration_date,
    }
  end

  def categories
    categories = Category.where(:_id.in => (certificate_categories.pluck(:category_id)))
    categories.map { |category| category.info }
  end

  def all_info
    {
      certificate: self.info,
      categories: self.categories,
    }
  end

end
