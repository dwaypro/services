# FROM ruby:2.5.1

# RUN apt-get update -qq && apt-get install -y build-essential libpq-dev nodejs

# RUN mkdir /services
# WORKDIR /services

# COPY Gemfile /services/Gemfile
# COPY Gemfile.lock /services/Gemfile.lock

# RUN bundle install

# COPY . /services

FROM ruby:2.5.1
RUN apt-get update -qq && apt-get install -y nodejs postgresql-client
RUN mkdir /services
WORKDIR /services
COPY Gemfile /services/Gemfile
COPY Gemfile.lock /services/Gemfile.lock
RUN bundle install
COPY . /services