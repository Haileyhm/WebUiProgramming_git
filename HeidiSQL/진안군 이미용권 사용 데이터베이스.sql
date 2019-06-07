SELECT 
	userid,
	region,
	name,
	birthdate,
	balance
FROM citizenlist
where name = '김해리'
and region = '마령'
and birthdate = '470325';
update citizenlist set balance = "5" where no="MR0001";

update citizenlist set balance = "5" where no="MR0001";