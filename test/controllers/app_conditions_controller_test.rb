require 'test_helper'

class AppConditionsControllerTest < ActionController::TestCase
  setup do
    @app_condition = app_conditions(:one)
  end

  test "should get index" do
    get :index
    assert_response :success
    assert_not_nil assigns(:app_conditions)
  end

  test "should get new" do
    get :new
    assert_response :success
  end

  test "should create app_condition" do
    assert_difference('AppCondition.count') do
      post :create, app_condition: { reason: @app_condition.reason, status: @app_condition.status, user: @app_condition.user }
    end

    assert_redirected_to app_condition_path(assigns(:app_condition))
  end

  test "should show app_condition" do
    get :show, id: @app_condition
    assert_response :success
  end

  test "should get edit" do
    get :edit, id: @app_condition
    assert_response :success
  end

  test "should update app_condition" do
    patch :update, id: @app_condition, app_condition: { reason: @app_condition.reason, status: @app_condition.status, user: @app_condition.user }
    assert_redirected_to app_condition_path(assigns(:app_condition))
  end

  test "should destroy app_condition" do
    assert_difference('AppCondition.count', -1) do
      delete :destroy, id: @app_condition
    end

    assert_redirected_to app_conditions_path
  end
end
