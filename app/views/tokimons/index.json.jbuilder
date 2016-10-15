json.array!(@tokimons) do |tokimon|
  json.extract! tokimon, :id, :tname, :weight, :height, :fly, :fire, :water, :electric, :ice, :total
  json.url tokimon_url(tokimon, format: :json)
end
