# -*- encoding: utf-8 -*-
# stub: phony_rails 0.14.0 ruby lib

Gem::Specification.new do |s|
  s.name = "phony_rails"
  s.version = "0.14.0"

  s.required_rubygems_version = Gem::Requirement.new(">= 0") if s.respond_to? :required_rubygems_version=
  s.require_paths = ["lib"]
  s.authors = ["Joost Hietbrink"]
  s.date = "2016-04-21"
  s.description = "This Gem adds useful methods to your Rails app to validate, display and save phone numbers."
  s.email = ["joost@joopp.com"]
  s.homepage = "https://github.com/joost/phony_rails"
  s.licenses = ["MIT"]
  s.post_install_message = "It now adds a '+' to the normalized number when it starts with a country number!"
  s.rubygems_version = "2.4.5.1"
  s.summary = "This Gem adds useful methods to your Rails app to validate, display and save phone numbers."

  s.installed_by_version = "2.4.5.1" if s.respond_to? :installed_by_version

  if s.respond_to? :specification_version then
    s.specification_version = 4

    if Gem::Version.new(Gem::VERSION) >= Gem::Version.new('1.2.0') then
      s.add_runtime_dependency(%q<phony>, ["~> 2.12"])
      s.add_runtime_dependency(%q<activesupport>, [">= 3.0"])
      s.add_development_dependency(%q<activerecord>, [">= 3.0"])
      s.add_development_dependency(%q<mongoid>, [">= 3.0"])
    else
      s.add_dependency(%q<phony>, ["~> 2.12"])
      s.add_dependency(%q<activesupport>, [">= 3.0"])
      s.add_dependency(%q<activerecord>, [">= 3.0"])
      s.add_dependency(%q<mongoid>, [">= 3.0"])
    end
  else
    s.add_dependency(%q<phony>, ["~> 2.12"])
    s.add_dependency(%q<activesupport>, [">= 3.0"])
    s.add_dependency(%q<activerecord>, [">= 3.0"])
    s.add_dependency(%q<mongoid>, [">= 3.0"])
  end
end
