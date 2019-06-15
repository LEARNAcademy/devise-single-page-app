class ApartmentsController < ApplicationController
    before_action :authenticate_user!, only: [:create]
    
    def index
        apartments = Apartment.all
        render json: apartments, status: 200
    end
    
    def create 
        apartment = current_user.apartments.new(apartment_params)
        if apartment.save
            render json: apartment, status: 201
        else
            render json: apartment.errors.full_message, status: 422
        end
    end 
    
    private
    def apartment_params
        params.require(:apartment).permit(:address_1, :city)
    end
end
