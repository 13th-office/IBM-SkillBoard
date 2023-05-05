require "test_helper"

class CertificateCategoriesControllerTest < ActionDispatch::IntegrationTest
  setup do
    @certificate_category = certificate_categories(:one)
  end

  test "should get index" do
    get certificate_categories_url, as: :json
    assert_response :success
  end

  test "should create certificate_category" do
    assert_difference("CertificateCategory.count") do
      post certificate_categories_url, params: { certificate_category: { category_id: @certificate_category.category_id, certificate_id: @certificate_category.certificate_id } }, as: :json
    end

    assert_response :created
  end

  test "should show certificate_category" do
    get certificate_category_url(@certificate_category), as: :json
    assert_response :success
  end

  test "should update certificate_category" do
    patch certificate_category_url(@certificate_category), params: { certificate_category: { category_id: @certificate_category.category_id, certificate_id: @certificate_category.certificate_id } }, as: :json
    assert_response :success
  end

  test "should destroy certificate_category" do
    assert_difference("CertificateCategory.count", -1) do
      delete certificate_category_url(@certificate_category), as: :json
    end

    assert_response :no_content
  end
end
