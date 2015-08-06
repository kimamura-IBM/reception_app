json.array!(@app_conditions) do |app_condition|
  json.extract! app_condition, :id, :status, :user, :reason
  json.url app_condition_url(app_condition, format: :json)
end
