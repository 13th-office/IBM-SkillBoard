FROM ruby:3.0.2

WORKDIR /rails

COPY Gemfile Gemfile.lock ./

RUN bundle install

COPY . .

RUN bundle exec bootsnap precompile --gemfile app/ lib/

EXPOSE 3000

ENTRYPOINT ["/rails/docker-entrypoint.sh"]
