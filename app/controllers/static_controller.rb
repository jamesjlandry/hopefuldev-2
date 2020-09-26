class StaticController < ActionController::Base

    def frontend
        render file: "public/index.html"
    end
end
