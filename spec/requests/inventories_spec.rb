require 'rails_helper'

RSpec.describe 'Inventories API', type: :request do
  let!(:product) { FactoryGirl.create(:product) }
  let!(:inventories) { create_list(:inventory, 20, product_id: product.id) }
  let(:product_id) { product.id }
  let(:id) { inventories.first.id }

  describe 'GET api/v1/products/:product_id/inventories' do
    before { get "/api/v1/products/#{product_id}/inventories" }

    context 'when the product exists' do
      it 'returns status code 200' do
        expect(response).to have_http_status(200)
      end

      it 'returns all inventory items' do
        expect(json.size).to eq(20)
      end
    end

    context 'when the product does not exist' do
      let(:product_id) { 0 }

      it 'returns status code 404' do
        expect(response).to have_http_status(404)
      end

      it 'returns a not found message' do
        expect(response.body).to match(/Couldn't find Product/)
      end
    end
  end

  describe 'GET /api/v1/products/:product_id/inventories/:id' do
    before { get "/api/v1/products/#{product_id}/inventories/#{id}" }

    context 'when the product exists' do
      it 'returns status code 200' do
        expect(response).to have_http_status(200)
      end

      it 'returns the inventory item' do
        expect(json['id']).to eq(id)
      end
    end

    context 'when the product does not exist' do
      let(:id) { 0 }

      it 'returns status code 404' do
        expect(response).to have_http_status(404)
      end

      it 'returns a not found message' do
        expect(response.body).to match(/Couldn't find Inventory/)
      end
    end
  end
end
