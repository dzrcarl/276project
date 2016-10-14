class SayController < ApplicationController
  def hello
    @form_name = params['name']
    @time = time.now
  end

  def goodbye
  end

  def index
  end
end
