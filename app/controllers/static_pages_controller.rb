class StaticPagesController < ApplicationController

	def home
		@@counter = 0
		@@start = Time.now
	end
	
	def check
	    c = User.find_by(username: params[:username])
	    name = c.username
	    x = params[:x].to_i
	    y = params[:y].to_i
	    waldo_x = c.x.to_i
	    waldo_y = c.y.to_i
	    if(x > waldo_x - 20 && x < waldo_x + 20 && y > waldo_y - 20 && y < waldo_y + 20 )
	      render json: { usernam: name }
	    else
	      false
	    end
	end
end
