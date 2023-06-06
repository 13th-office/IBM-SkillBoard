FROM ruby:3.0.2

WORKDIR /rails

COPY Gemfile Gemfile.lock ./

RUN bundle install

COPY . .

RUN bundle exec bootsnap precompile --gemfile app/ lib/

RUN set -e && if [ -f tmp/pids/server.pid ]; then rm tmp/pids/server.pid; fi

EXPOSE 3000

CMD ["bin/rails", "server", "-b", "0.0.0.0"]
