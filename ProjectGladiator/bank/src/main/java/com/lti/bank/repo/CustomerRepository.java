package com.lti.bank.repo;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.lti.bank.model.Customer;

@Repository
public interface CustomerRepository extends JpaRepository<Customer, Long>{
	
	Customer findByEmailId(String emailId);
	Customer findByAadharNumber(long aadharNumber);
	Customer findByPancardNumber(String pancardNumber);
	Customer findByMobileNumber(long mobileNumber);

}
