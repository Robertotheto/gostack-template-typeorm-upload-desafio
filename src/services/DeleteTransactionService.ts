import { getCustomRepository } from 'typeorm';
import AppError from '../errors/AppError';
import TransactionsRepository from '../repositories/TransactionsRepository';

class DeleteTransactionService {
  public async execute(id: string): Promise<void> {
    const transactionsRepository = getCustomRepository(TransactionsRepository);
    const transactions = await transactionsRepository.findOne(id);
    if (!transactions) {
      throw new AppError('Transaction does not exists.');
    }
    await transactionsRepository.remove(transactions);
  }
}

export default DeleteTransactionService;
