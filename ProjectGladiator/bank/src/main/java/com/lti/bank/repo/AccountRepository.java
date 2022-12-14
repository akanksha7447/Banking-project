package com.lti.bank.repo;


import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import com.lti.bank.model.Account;

@Repository
@Transactional
public interface AccountRepository extends JpaRepository<Account,Long> {
	
	@Query("select a.balanceAmount from Account a where a.accountId =:accountId")
	public double getBalanceByAccountId(@Param("accountId") Long accountId);
	
	@Modifying
	@Query("update Account set balanceAmount=:balance where accountId=:accountId ")
	public int updateAccountBalanceByAccountId(@Param("balance") Double balance, @Param("accountId") Long accountId );
	
	

}
