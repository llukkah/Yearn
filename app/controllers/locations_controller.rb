class LocationsController < ApplicationController
  before_action :set_location, only: [:show, :update, :destroy]
  # before_action :authorize_request
  # GET /locations
  def index
    render json: @current_user.locations, include: :tasks, status: :ok
  end

  # GET /locations/1
  def show
    render json: @location, include: :tasks, status: :ok
  end

  # POST /locations
  def create
    @location = Location.new(location_params)

    if @location.save
      render json: @location, status: :created, location: @location
    else
      render json: @location.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /locations/1
  def update
    if @location.update(location_params)
      render json: @location
    else
      render json: @location.errors, status: :unprocessable_entity
    end
  end

  # DELETE /locations/1
  def destroy
    @location.destroy
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_location
      @location = Location.find(params[:id])
    end

    # Only allow a trusted parameter "white list" through.
    def location_params
      params.require(:location).permit(:city, :country, :photo, :lodgingDetails, :activityDetails, :user_id)
    end
end
