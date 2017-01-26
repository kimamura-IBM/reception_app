
# coding: utf-8
# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

AppCondition.create(:status => 2, :user => 'test', :reason => '休日出勤')
AppCondition.create(:status => 3, :user => 'test', :reason => '臨時休業')
AppCondition.create(:status => 1, :user => 'test', :reason => '通常に戻す')
