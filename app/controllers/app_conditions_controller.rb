class AppConditionsController < ApplicationController
  before_action :set_app_condition, only: [:show, :edit, :update, :destroy]

  # GET /app_conditions
  # GET /app_conditions.json
  def index
    @app_conditions = AppCondition.all
  end

  # GET /app_conditions/1
  # GET /app_conditions/1.json
  def show
  end

  # GET /app_conditions/new
  def new
    @app_condition = AppCondition.new
  end

  # GET /app_conditions/1/edit
  def edit
  end

  # POST /app_conditions
  # POST /app_conditions.json
  def create
    @app_condition = AppCondition.new(app_condition_params)

    respond_to do |format|
      if @app_condition.save
        format.html { redirect_to @app_condition, notice: 'App condition was successfully created.' }
        format.json { render :show, status: :created, location: @app_condition }
      else
        format.html { render :new }
        format.json { render json: @app_condition.errors, status: :unprocessable_entity }
      end
    end
  end

  # PATCH/PUT /app_conditions/1
  # PATCH/PUT /app_conditions/1.json
  def update
    respond_to do |format|
      if @app_condition.update(app_condition_params)
        format.html { redirect_to @app_condition, notice: 'App condition was successfully updated.' }
        format.json { render :show, status: :ok, location: @app_condition }
      else
        format.html { render :edit }
        format.json { render json: @app_condition.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /app_conditions/1
  # DELETE /app_conditions/1.json
  def destroy
    @app_condition.destroy
    respond_to do |format|
      format.html { redirect_to app_conditions_url, notice: 'App condition was successfully destroyed.' }
      format.json { head :no_content }
    end
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_app_condition
      @app_condition = AppCondition.find(params[:id])
    end

    # Never trust parameters from the scary internet, only allow the white list through.
    def app_condition_params
      params.require(:app_condition).permit(:status, :user, :reason)
    end
end
