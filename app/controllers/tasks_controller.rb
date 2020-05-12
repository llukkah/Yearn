class TasksController < ApplicationController
  before_action :authorize_request
  before_action :set_task, only: [:show, :update, :destroy]
  # GET /tasks
  def index
    @location = Location.find(params[:location_id])
    @tasks = Task.where(location_id: @location.id)
    render json: @tasks, include: :location, status: :ok
  end

  # GET /tasks/1
  # def show
  #   @location = Location.find(params[:location_id])
  #   @tasks = Task.where(location_id: @location.id)
  #   @task = @tasks.find(params[:id])
  #   render json: @task, include: :location, status: :ok
  # end

  # POST /tasks
  def create
    @task = Task.new(task_params)

    if @task.save
      render json: @task, status: :created, location: @task
    else
      render json: @task.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /tasks/1
  def update
    if @task.update(task_params)
      render json: @task
    else
      render json: @task.errors, status: :unprocessable_entity
    end
  end

  # DELETE /tasks/1
  def destroy
    @task.destroy
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_task
      @task = Task.find(params[:id])
    end

    # Only allow a trusted parameter "white list" through.
    def task_params
      params.require(:task).permit(:listItem, :location_id)
    end
end
