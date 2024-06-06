# import pandas as pd

# # Define initial parameters
# initial_investment = 60
# risk_percentage = 0.37
# stop_loss_percentage = 0.3
# target_amount = 2000
# pip_value_micro_lot = 0.10  # Value of one pip in USD for a micro lot (0.01 lot)

# # Initialize lists to store the table data
# trade_number = []
# initial_investments = []
# risks = []
# stop_losses = []
# profits = []
# cumulative_totals = []
# lot_sizes = []

# # Function to calculate profit and loss
# def calculate_profit_loss(initial_investment, risk, lot_size, price_movement, is_win):
#     pip_value = lot_size * pip_value_micro_lot
#     if is_win:
#         profit = pip_value * price_movement * lot_size
#         new_balance = initial_investment + profit
#     else:
#         loss = pip_value * price_movement * lot_size
#         new_balance = initial_investment - loss
#     return new_balance

# # Initial values
# current_balance = initial_investment
# trade_count = 0

# # Loop until the target amount is reached
# while current_balance < target_amount and trade_count < 30:  # Limited to 12 trades for the example
#     trade_count += 1
#     trade_number.append(trade_count)
#     initial_investments.append(current_balance)
    
#     risk_amount = round(current_balance * stop_loss_percentage, 2)
#     stop_loss_amount = round(current_balance * stop_loss_percentage, 2)
#     lot_size = round(risk_amount / (pip_value_micro_lot), 2)  # Assuming 1:3 risk-to-reward ratio
    
#     risks.append(risk_amount)
#     stop_losses.append(stop_loss_amount)
#     profits.append(risk_amount)  # 1:3 risk-to-reward ratio
#     lot_sizes.append(lot_size)
    
#     current_balance += risk_amount  # Add profit to the current balance
#     cumulative_totals.append(current_balance)

# # Create DataFrame
# df = pd.DataFrame({
#     "Trade Number": trade_number,
#     "Initial Investment": initial_investments,
#     "Risk ($)": risks,
#     "Stop Loss ($)": stop_losses,
#     "Profit per Trade ($)": profits,
#     "Cumulative Total ($)": cumulative_totals,
#     "Lot Size (Micro Lots)": lot_sizes
# })

# # Save the DataFrame to a text file
# file_path = "C:/Users/Ahmad/Desktop/Trading_Plan_with_Risk_to_Reward_Ratio.txt"
# with open(file_path, 'w') as file:
#     file.write(df.to_string(index=False))

# print(f"File saved to {file_path}")

# # Function to calculate win and loss for a trade
# def calculate_trade_result(initial_investment, risk, lot_size, price_movement, is_win):
#     pip_value = lot_size * 0.10  # Assuming pip value of $0.10 per micro lot
#     if is_win:
#         profit = pip_value * price_movement
#         new_balance = initial_investment + profit
#     else:
#         loss = pip_value * price_movement
#         new_balance = initial_investment - loss
#     return new_balance

# # Example usage
# trade_number = 7  # Example trade number
# if trade_number - 1 < len(df):
#     initial_investment = df.loc[trade_number - 1, "Initial Investment"]
#     risk = df.loc[trade_number - 1, "Risk ($)"]
#     lot_size = df.loc[trade_number - 1, "Lot Size (Micro Lots)"]

#     # Calculate the result of a winning trade with a $3 price movement
#     new_balance_win = calculate_trade_result(initial_investment, risk, lot_size, 3, True)
#     print(f"New balance after a winning trade: ${new_balance_win:.2f}")

#     # Calculate the result of a losing trade with a $3 price movement
#     new_balance_loss = calculate_trade_result(initial_investment, risk, lot_size, 3, False)
#     print(f"New balance after a losing trade: ${new_balance_loss:.2f}")
# else:
#     print(f"Trade number {trade_number} is out of range.")


# def calculate_pips_survival(account_balance, lot_size_micro, pip_value_per_micro_lot=0.10):
#     """
#     Calculate the number of pips you can lose before hitting the stop out.

#     Parameters:
#     - account_balance: float, the current account balance in USD
#     - lot_size_micro: float, the position size in micro lots
#     - pip_value_per_micro_lot: float, the value of one pip per micro lot in USD (default is 0.10)

#     Returns:
#     - float, the number of pips you can lose before hitting the stop out
#     """
#     # Calculate pip value for the given lot size
#     pip_value = lot_size_micro * pip_value_per_micro_lot

#     # Calculate the number of pips you can survive
#     number_of_pips = account_balance / pip_value

#     return number_of_pips

# # Example usage
# account_balance_ = 289.61   # in USD
# lot_size_micro = 868.8  # in micro lots

# number_of_pips = calculate_pips_survival(account_balance_, lot_size_micro)
# print(f"With an account balance of ${account_balance_} and a position size of {lot_size_micro} micro lots, you can survive a loss of approximately {number_of_pips:.2f} pips before hitting the stop out.")







# import pandas as pd

# # Define initial parameters
# initial_investment = 60
# risk_percentage = 0.37
# stop_loss_percentage = 0.30
# target_amount = 2000
# pip_value_micro_lot = 0.10  # Value of one pip in USD for a micro lot (0.01 lot)

# # Initialize lists to store the table data
# trade_number = []
# initial_investments = []
# risks = []
# stop_losses = []
# profits = []
# cumulative_totals = []
# lot_sizes = []

# # Function to calculate profit and loss
# def calculate_profit_loss(initial_investment, risk, lot_size, price_movement, is_win):
#     pip_value = lot_size * pip_value_micro_lot
#     if is_win:
#         profit = pip_value * price_movement * lot_size
#         new_balance = initial_investment + profit
#     else:
#         loss = pip_value * price_movement * lot_size
#         new_balance = initial_investment - loss
#     return new_balance

# # Initial values
# current_balance = initial_investment
# trade_count = 0

# # Loop until the target amount is reached or until 30 trades
# while current_balance < target_amount and trade_count < 30:
#     trade_count += 1
#     trade_number.append(trade_count)
#     initial_investments.append(current_balance)
    
#     risk_amount = round(current_balance * risk_percentage, 2)
#     stop_loss_amount = round(current_balance * stop_loss_percentage, 2)
#     lot_size = round((risk_amount) / (current_balance * pip_value_micro_lot), 1)  # Calculate lot size
    
#     risks.append(risk_amount)
#     stop_losses.append(stop_loss_amount)
#     profits.append(risk_amount)  # No risk-to-reward ratio applied
#     lot_sizes.append(lot_size)
    
#     current_balance += risk_amount  # Add profit to the current balance
#     cumulative_totals.append(current_balance)

# # Create DataFrame
# df = pd.DataFrame({
#     "Trade Number": trade_number,
#     "Initial Investment": initial_investments,
#     "Risk ($)": risks,
#     "Stop Loss ($)": stop_losses,
#     "Profit per Trade ($)": profits,
#     "Cumulative Total ($)": cumulative_totals,
#     "Lot Size (Micro Lots)": lot_sizes
# })

# # Save the DataFrame to a text file
# file_path = "C:/Users/Ahmad/Desktop/Trading_Plan_with_Risk_to_Reward_Ratio.txt"
# with open(file_path, 'w') as file:
#     file.write(df.to_string(index=False))

# print(f"File saved to {file_path}")

# # Function to calculate win and loss for a trade
# def calculate_trade_result(initial_investment, risk, lot_size, price_movement, is_win):
#     pip_value = lot_size * 0.001  # Assuming pip value of $0.10 per micro lot
#     if is_win:
#         profit = pip_value * price_movement
#         new_balance = initial_investment + profit
#     else:
#         loss = pip_value * price_movement
#         new_balance = initial_investment - loss
#     return new_balance

# # Function to calculate the number of pips you can lose before hitting the stop out
# def calculate_pips_survival(account_balance, lot_size_micro, pip_value_per_micro_lot=0.10):
#     """
#     Calculate the number of pips you can lose before hitting the stop out.

#     Parameters:
#     - account_balance: float, the current account balance in USD
#     - lot_size_micro: float, the position size in micro lots
#     - pip_value_per_micro_lot: float, the value of one pip per micro lot in USD (default is 0.10)

#     Returns:
#     - float, the number of pips you can lose before hitting the stop out
#     """
#     # Calculate pip value for the given lot size
#     pip_value = lot_size_micro * pip_value_per_micro_lot

#     # Calculate the number of pips you can survive
#     number_of_pips = account_balance / pip_value

#     return number_of_pips

# # Example usage
# account_balance_ = 60.00   # in USD
# lot_size_micro = 180.0  # in micro lots

# number_of_pips = calculate_pips_survival(account_balance_, lot_size_micro)
# print(f"With an account balance of ${account_balance_} and a position size of {lot_size_micro} micro lots, you can survive a loss of approximately {number_of_pips:.2f} pips before hitting the stop out.")




######################################################################################




# import pandas as pd

# # Define initial parameters
# initial_investment = 60
# risk_percentage = 0.20
# stop_loss_pips = 30  # Adjust this value as needed
# target_amount = 2000
# pip_value_micro_lot = 0.10  # Value of one pip in USD for a micro lot (0.01 lot)

# # Initialize lists to store the table data
# trade_number = []
# initial_investments = []
# risks = []
# stop_losses = []
# profits = []
# cumulative_totals = []
# lot_sizes = []

# # Function to calculate lot size based on stop loss pips
# def calculate_lot_size(risk_amount, stop_loss_pips, pip_value_micro_lot):
#     return round(risk_amount / (stop_loss_pips * pip_value_micro_lot), 1)  # Rounded to the first decimal

# # Function to calculate profit and loss
# def calculate_profit_loss(initial_investment, risk, lot_size, price_movement, is_win):
#     pip_value = lot_size * pip_value_micro_lot
#     if is_win:
#         profit = pip_value * price_movement
#         new_balance = initial_investment + profit
#     else:
#         loss = pip_value * price_movement
#         new_balance = initial_investment - loss
#     return new_balance

# # Initial values
# current_balance = initial_investment
# trade_count = 0

# # Loop until the target amount is reached or until 30 trades
# while current_balance < target_amount and trade_count < 30:
#     trade_count += 1
#     trade_number.append(trade_count)
#     initial_investments.append(current_balance)
    
#     risk_amount = round(current_balance * risk_percentage, 2)
#     stop_loss_amount = round(current_balance * 0.30, 2)  # Fixed stop loss percentage in monetary terms
#     lot_size = calculate_lot_size(risk_amount, stop_loss_pips, pip_value_micro_lot)  # Calculate lot size based on stop loss in pips
    
#     risks.append(risk_amount)
#     stop_losses.append(stop_loss_amount)
#     profits.append(risk_amount)  # No risk-to-reward ratio applied
#     lot_sizes.append(lot_size)
    
#     current_balance += risk_amount  # Add profit to the current balance
#     cumulative_totals.append(current_balance)

# # Create DataFrame
# df = pd.DataFrame({
#     "Trade Number": trade_number,
#     "Initial Investment": initial_investments,
#     "Risk ($)": risks,
#     "Stop Loss ($)": stop_losses,
#     "Profit per Trade ($)": profits,
#     "Cumulative Total ($)": cumulative_totals,
#     "Lot Size (Micro Lots)": lot_sizes
# })

# # Save the DataFrame to a text file
# file_path = "C:/Users/Ahmad/Desktop/Trading_Plan_with_Updated_Lot_Sizes.txt"
# with open(file_path, 'w') as file:
#     file.write(df.to_string(index=False))

# print(f"File saved to {file_path}")

# # Function to calculate win and loss for a trade
# def calculate_trade_result(initial_investment, risk, lot_size, price_movement, is_win):
#     pip_value = lot_size * pip_value_micro_lot
#     if is_win:
#         profit = pip_value * price_movement
#         new_balance = initial_investment + profit
#     else:
#         loss = pip_value * price_movement
#         new_balance = initial_investment - loss
#     return new_balance

# # Function to calculate the number of pips you can lose before hitting the stop out
# def calculate_pips_survival(account_balance, lot_size_micro, pip_value_per_micro_lot=0.10):
#     """
#     Calculate the number of pips you can lose before hitting the stop out.

#     Parameters:
#     - account_balance: float, the current account balance in USD
#     - lot_size_micro: float, the position size in micro lots
#     - pip_value_per_micro_lot: float, the value of one pip per micro lot in USD (default is 0.10)

#     Returns:
#     - float, the number of pips you can lose before hitting the stop out
#     """
#     # Calculate pip value for the given lot size
#     pip_value = lot_size_micro * pip_value_per_micro_lot

#     # Calculate the number of pips you can survive
#     number_of_pips = account_balance / pip_value

#     return number_of_pips

# # Example usage
# account_balance_ = 72.00   # in USD
# lot_size_micro = 4.8  # in micro lots

# number_of_pips = calculate_pips_survival(account_balance_, lot_size_micro)
# print(f"With an account balance of ${account_balance_} and a position size of {lot_size_micro} micro lots, you can survive a loss of approximately {number_of_pips:.2f} pips before hitting the stop out.")



######################################################################################







# import pandas as pd

# # Define initial parameters
# initial_investment = 60
# risk_percentage = 0.20
# stop_loss_pips = 30  # Adjust this value as needed
# target_amount = 2000
# pip_value_micro_lot = 0.10  # Value of one pip in USD for a micro lot (0.01 lot)

# # Initialize lists to store the table data
# trade_number = []
# initial_investments = []
# risks = []
# stop_losses = []
# profits = []
# cumulative_totals = []
# lot_sizes = []
# pips_won = []

# # Function to calculate lot size based on stop loss pips
# def calculate_lot_size(risk_amount, stop_loss_pips, pip_value_micro_lot):
#     return round(risk_amount / (stop_loss_pips * pip_value_micro_lot), 1)  # Rounded to the first decimal

# # Function to calculate profit and loss
# def calculate_profit_loss(initial_investment, risk, lot_size, price_movement, is_win):
#     pip_value = lot_size * pip_value_micro_lot
#     if is_win:
#         profit = pip_value * price_movement
#         new_balance = initial_investment + profit
#     else:
#         loss = pip_value * price_movement
#         new_balance = initial_investment - loss
#     return new_balance

# # Initial values
# current_balance = initial_investment
# trade_count = 0

# # Loop until the target amount is reached or until 30 trades
# while current_balance < target_amount and trade_count < 30:
#     trade_count += 1
#     trade_number.append(trade_count)
#     initial_investments.append(current_balance)
    
#     risk_amount = round(current_balance * risk_percentage, 2)
#     stop_loss_amount = round(current_balance * 0.30, 2)  # Fixed stop loss percentage in monetary terms
#     lot_size = calculate_lot_size(risk_amount, stop_loss_pips, pip_value_micro_lot)  # Calculate lot size based on stop loss in pips
#     profit = risk_amount  # Profit is the same as risk amount for 1:1 risk-to-reward ratio
    
#     # Calculate number of pips won
#     pips_won_per_trade = round(profit / (lot_size * pip_value_micro_lot), 2)
    
#     risks.append(risk_amount)
#     stop_losses.append(stop_loss_amount)
#     profits.append(profit)  # No risk-to-reward ratio applied
#     lot_sizes.append(lot_size)
#     pips_won.append(pips_won_per_trade)
    
#     current_balance += profit  # Add profit to the current balance
#     cumulative_totals.append(current_balance)

# # Create DataFrame
# df = pd.DataFrame({
#     "Trade Number": trade_number,
#     "Initial Investment": initial_investments,
#     "Risk ($)": risks,
#     "Stop Loss ($)": stop_losses,
#     "Profit per Trade ($)": profits,
#     "Cumulative Total ($)": cumulative_totals,
#     "Lot Size (Micro Lots)": lot_sizes,
#     "Pips Won": pips_won
# })

# # Save the DataFrame to a text file
# file_path = "C:/Users/Ahmad/Desktop/Trading_Plan_with_Updated_Lot_Sizes_and_Pips_Won.txt"
# with open(file_path, 'w') as file:
#     file.write(df.to_string(index=False))

# print(f"File saved to {file_path}")

# # Function to calculate win and loss for a trade
# def calculate_trade_result(initial_investment, risk, lot_size, price_movement, is_win):
#     pip_value = lot_size * pip_value_micro_lot
#     if is_win:
#         profit = pip_value * price_movement
#         new_balance = initial_investment + profit
#     else:
#         loss = pip_value * price_movement
#         new_balance = initial_investment - loss
#     return new_balance

# # Function to calculate the number of pips you can lose before hitting the stop out
# def calculate_pips_survival(account_balance, lot_size_micro, pip_value_per_micro_lot=0.10):
#     """
#     Calculate the number of pips you can lose before hitting the stop out.

#     Parameters:
#     - account_balance: float, the current account balance in USD
#     - lot_size_micro: float, the position size in micro lots
#     - pip_value_per_micro_lot: float, the value of one pip per micro lot in USD (default is 0.10)

#     Returns:
#     - float, the number of pips you can lose before hitting the stop out
#     """
#     # Calculate pip value for the given lot size
#     pip_value = lot_size_micro * pip_value_per_micro_lot

#     # Calculate the number of pips you can survive
#     number_of_pips = account_balance / pip_value

#     return number_of_pips

# # Example usage
# account_balance_ = 1916.87   # in USD
# lot_size_micro = 127.8   # in micro lots

# number_of_pips = calculate_pips_survival(account_balance_, lot_size_micro)
# print(f"With an account balance of ${account_balance_} and a position size of {lot_size_micro} micro lots, you can survive a loss of approximately {number_of_pips:.2f} pips before hitting the stop out.")







# import pandas as pd

# # Define initial parameters
# initial_investment = 60
# risk_percentage = 0.20
# stop_loss_percentage = 0.20  # Stop loss percentage, the same as the risk percentage
# target_amount = 2000
# pip_value_micro_lot = 0.10  # Value of one pip in USD for a micro lot (0.01 lot)

# # Initialize lists to store the table data
# trade_number = []
# initial_investments = []
# risks = []
# stop_losses = []
# profits = []
# cumulative_totals = []
# lot_sizes = []
# pips_won = []
# pips_lost_to_stop_loss = []
# pips_to_lose_whole_investment = []

# # Function to calculate lot size based on stop loss pips
# def calculate_lot_size(risk_amount, stop_loss_amount, pip_value_micro_lot):
#     return round(risk_amount / (stop_loss_amount * pip_value_micro_lot), 1)  # Rounded to the first decimal

# # Function to calculate profit and loss
# def calculate_profit_loss(initial_investment, risk, lot_size, price_movement, is_win):
#     pip_value = lot_size * pip_value_micro_lot
#     if is_win:
#         profit = pip_value * price_movement
#         new_balance = initial_investment + profit
#     else:
#         loss = pip_value * price_movement
#         new_balance = initial_investment - loss
#     return new_balance

# # Initial values
# current_balance = initial_investment
# trade_count = 0

# # Loop until the target amount is reached or until 30 trades
# while current_balance < target_amount and trade_count < 30:
#     trade_count += 1
#     trade_number.append(trade_count)
#     initial_investments.append(current_balance)
    
#     risk_amount = round(current_balance * risk_percentage, 2)
#     stop_loss_amount = round(current_balance * stop_loss_percentage, 2)  # Stop loss amount as a percentage of current balance
#     lot_size = calculate_lot_size(risk_amount, stop_loss_amount, pip_value_micro_lot)  # Calculate lot size based on stop loss amount
#     profit = risk_amount  # Profit is the same as risk amount for 1:1 risk-to-reward ratio
    
#     # Calculate number of pips won
#     pips_won_per_trade = round(profit / (lot_size * pip_value_micro_lot), 2)
    
#     # Calculate number of pips lost to hit stop loss
#     pips_lost_to_stop_loss_per_trade = round(stop_loss_amount / (lot_size * pip_value_micro_lot), 2)
    
#     # Calculate number of pips to lose whole investment
#     pips_to_lose_whole_investment_per_trade = round(current_balance / (lot_size * pip_value_micro_lot), 2)
    
#     risks.append(risk_amount)
#     stop_losses.append(stop_loss_amount)
#     profits.append(profit)  # No risk-to-reward ratio applied
#     lot_sizes.append(lot_size)
#     pips_won.append(pips_won_per_trade)
#     pips_lost_to_stop_loss.append(pips_lost_to_stop_loss_per_trade)
#     pips_to_lose_whole_investment.append(pips_to_lose_whole_investment_per_trade)
    
#     current_balance += profit  # Add profit to the current balance
#     cumulative_totals.append(current_balance)

# # Create DataFrame
# df = pd.DataFrame({
#     "Trade Number": trade_number,
#     "Initial Investment": initial_investments,
#     "Risk ($)": risks,
#     "Stop Loss ($)": stop_losses,
#     "Profit per Trade ($)": profits,
#     "Cumulative Total ($)": cumulative_totals,
#     "Lot Size (Micro Lots)": lot_sizes,
#     "Pips Won": pips_won,
#     "Pips Lost to Hit Stop Loss": pips_lost_to_stop_loss,
#     "Pips to Lose Whole Investment": pips_to_lose_whole_investment
# })

# # Save the DataFrame to a text file
# file_path = "C:/Users/Ahmad/Desktop/Trading_Plan_with_Updated_Lot_Sizes_and_Pips.txt"
# with open(file_path, 'w') as file:
#     file.write(df.to_string(index=False))

# print(f"File saved to {file_path}")

# # Function to calculate win and loss for a trade
# def calculate_trade_result(initial_investment, risk, lot_size, price_movement, is_win):
#     pip_value = lot_size * pip_value_micro_lot
#     if is_win:
#         profit = pip_value * price_movement
#         new_balance = initial_investment + profit
#     else:
#         loss = pip_value * price_movement
#         new_balance = initial_investment - loss
#     return new_balance

# # Function to calculate the number of pips you can lose before hitting the stop out
# def calculate_pips_survival(account_balance, lot_size_micro, pip_value_per_micro_lot=0.10):
#     """
#     Calculate the number of pips you can lose before hitting the stop out.

#     Parameters:
#     - account_balance: float, the current account balance in USD
#     - lot_size_micro: float, the position size in micro lots
#     - pip_value_per_micro_lot: float, the value of one pip per micro lot in USD (default is 0.10)

#     Returns:
#     - float, the number of pips you can lose before hitting the stop out
#     """
#     # Calculate pip value for the given lot size
#     pip_value = lot_size_micro * pip_value_per_micro_lot

#     # Calculate the number of pips you can survive
#     number_of_pips = account_balance / pip_value

#     return number_of_pips

# # Example usage
# account_balance_ = 72.00   # in USD
# lot_size_micro = 10.0   # in micro lots

# number_of_pips = calculate_pips_survival(account_balance_, lot_size_micro)
# print(f"With an account balance of ${account_balance_} and a position size of {lot_size_micro} micro lots, you can survive a loss of approximately {number_of_pips:.2f} pips before hitting the stop out.")


# import pandas as pd

# # Define initial parameters
# initial_investment = 60
# risk_percentage = 0.30
# stop_loss_percentage = 0.30  # Stop loss percentage, the same as the risk percentage
# target_amount = 2000
# pip_value_micro_lot = 0.10  # Value of one pip in USD for a micro lot (0.01 lot)
# initial_lot_size = 6  # Starting lot size
# lot_size_increment = 2  # Increment value for lot size
# fixed_pips = 20  # Fixed number of pips for profit calculation

# # Initialize lists to store the table data
# trade_number = []
# initial_investments = []
# risks = []
# stop_losses = []
# profits = []
# cumulative_totals = []
# lot_sizes = []
# pips_won = []
# pips_lost_to_stop_loss = []
# pips_to_lose_whole_investment = []

# # Function to calculate lot size based on stop loss amount
# def calculate_lot_size(risk_amount, stop_loss_amount, pip_value_micro_lot):
#     return round(risk_amount / (stop_loss_amount * pip_value_micro_lot), 2)  # Rounded to two decimals

# # Function to calculate profit based on fixed pips
# def calculate_profit(lot_size, fixed_pips, pip_value_micro_lot):
#     return round(lot_size * fixed_pips * pip_value_micro_lot, 2)

# # Initial values
# current_balance = initial_investment
# trade_count = 0
# current_lot_size = initial_lot_size
# #     lot_size = calculate_lot_size(risk_amount, stop_loss_pips, pip_value_micro_lot)  # Calculate lot size based on stop loss in pips
# # Loop until the target amount is reached or until 30 trades
# while current_balance < target_amount and trade_count < 100:
#     trade_count += 1
#     trade_number.append(trade_count)
#     initial_investments.append(current_balance)
    
#     risk_amount = round(current_balance * risk_percentage, 2)
#     stop_loss_amount = round(current_balance * stop_loss_percentage, 2)  # Stop loss amount as a percentage of current balance
#     profit = calculate_profit(current_lot_size, fixed_pips, pip_value_micro_lot)  # Calculate profit based on fixed pips
    
#     # Calculate number of pips won
#     pips_won_per_trade = fixed_pips
    
#     # Calculate number of pips lost to hit stop loss
#     pips_lost_to_stop_loss_per_trade = round(stop_loss_amount / (current_lot_size * pip_value_micro_lot), 2)
    
#     # Calculate number of pips to lose whole investment
#     pips_to_lose_whole_investment_per_trade = round(current_balance / (current_lot_size * pip_value_micro_lot), 2)
    
#     risks.append(risk_amount)
#     stop_losses.append(stop_loss_amount)
#     profits.append(profit)  # Profit based on fixed pips
#     lot_sizes.append(current_lot_size)
#     pips_won.append(pips_won_per_trade)
#     pips_lost_to_stop_loss.append(pips_lost_to_stop_loss_per_trade)
#     pips_to_lose_whole_investment.append(pips_to_lose_whole_investment_per_trade)
    
#     current_balance += profit  # Add profit to the current balance
#     cumulative_totals.append(current_balance)
    
#     current_lot_size = round(current_lot_size + lot_size_increment, 2)  # Increment lot size

# # Create DataFrame
# df = pd.DataFrame({
#     "Trade Number": trade_number,
#     "Initial Investment": initial_investments,
#     "Risk ($)": risks,
#     "Stop Loss ($)": stop_losses,
#     "Profit per Trade ($)": profits,
#     "Cumulative Total ($)": cumulative_totals,
#     "Lot Size (Micro Lots)": lot_sizes,
#     "Pips Won": pips_won,
#     "Pips Lost to Hit Stop Loss": pips_lost_to_stop_loss,
#     "Pips to Lose Whole Investment": pips_to_lose_whole_investment
# })

# # Save the DataFrame to a text file
# file_path = "C:/Users/Ahmad/Desktop/Trading_Plan_with_Updated_Lot_Sizes_and_Pips.txt"
# with open(file_path, 'w') as file:
#     file.write(df.to_string(index=False))

# print(f"File saved to {file_path}")

# # Function to calculate win and loss for a trade
# def calculate_trade_result(initial_investment, risk, lot_size, price_movement, is_win):
#     pip_value = lot_size * pip_value_micro_lot
#     if is_win:
#         profit = pip_value * price_movement
#         new_balance = initial_investment + profit
#     else:
#         loss = pip_value * price_movement
#         new_balance = initial_investment - loss
#     return new_balance

# # Function to calculate the number of pips you can lose before hitting the stop out
# def calculate_pips_survival(account_balance, lot_size_micro, pip_value_per_micro_lot=0.10):
#     """
#     Calculate the number of pips you can lose before hitting the stop out.

#     Parameters:
#     - account_balance: float, the current account balance in USD
#     - lot_size_micro: float, the position size in micro lots
#     - pip_value_per_micro_lot: float, the value of one pip per micro lot in USD (default is 0.10)

#     Returns:
#     - float, the number of pips you can lose before hitting the stop out
#     """
#     # Calculate pip value for the given lot size
#     pip_value = lot_size_micro * pip_value_per_micro_lot

#     # Calculate the number of pips you can survive
#     number_of_pips = account_balance / pip_value

#     return number_of_pips

# # Example usage
# account_balance_ = 72.00   # in USD
# lot_size_micro = 8  # in micro lots

# number_of_pips = calculate_pips_survival(account_balance_, lot_size_micro)
# print(f"With an account balance of ${account_balance_} and a position size of {lot_size_micro} micro lots, you can survive a loss of approximately {number_of_pips:.2f} pips before hitting the stop out.")
















# import math
# import pandas as pd

# # Define initial parameters
# initial_investment = 60
# risk_percentage = 0.30
# stop_loss_percentage = 0.30  # Stop loss percentage, the same as the risk percentage
# target_amount = 2000
# pip_value_micro_lot = 0.10  # Value of one pip in USD for a micro lot (0.01 lot)
# initial_lot_size = 5  # Starting lot size
# lot_size_increment = 2  # Increment value for lot size
# fixed_pips = 20  # Fixed number of pips for profit calculation

# # Initialize lists to store the table data
# trade_number = []
# initial_investments = []
# risks = []
# stop_losses = []
# profits = []
# cumulative_totals = []
# lot_sizes = []
# pips_won = []
# pips_lost_to_stop_loss = []
# pips_to_lose_whole_investment = []

# # Function to calculate lot size based on risk amount
# def calculate_lot_size(risk_amount, stop_loss_pips, pip_value_micro_lot):
#     return round(risk_amount / (stop_loss_pips * pip_value_micro_lot), 2)

# # Function to calculate profit based on fixed pips
# def calculate_profit(lot_size, fixed_pips, pip_value_micro_lot):
#     return round(lot_size * fixed_pips * pip_value_micro_lot, 2)

# # Initial values
# current_balance = initial_investment
# trade_count = 0
# current_lot_size = initial_lot_size

# # Loop until the target amount is reached or until 100 trades
# while current_balance < target_amount and trade_count < 100:
#     trade_count += 1
#     trade_number.append(trade_count)
#     initial_investments.append(current_balance)
    
#     risk_amount = round(current_balance * risk_percentage, 2)
#     stop_loss_amount = round(current_balance * stop_loss_percentage, 2)  # Stop loss amount as a percentage of current balance
    
#     # Increment the lot size incrementally
#     if trade_count > 1:
#         growth_factor = 1
#         current_lot_size =  round(initial_lot_size * (trade_count ** 0.5) * (growth_factor ** trade_count), 2)
#         growth_factor += 0.1
    
#     profit = calculate_profit(current_lot_size, fixed_pips, pip_value_micro_lot)  # Calculate profit based on fixed pips
    
#     # Calculate number of pips won
#     pips_won_per_trade = fixed_pips
    
#     # Calculate number of pips lost to hit stop loss
#     pips_lost_to_stop_loss_per_trade = round(stop_loss_amount / (current_lot_size * pip_value_micro_lot), 2)
    
#     # Calculate number of pips to lose whole investment
#     pips_to_lose_whole_investment_per_trade = round(current_balance / (current_lot_size * pip_value_micro_lot), 2)
    
#     risks.append(risk_amount)
#     stop_losses.append(stop_loss_amount)
#     profits.append(profit)  # Profit based on fixed pips
#     lot_sizes.append(current_lot_size)
#     pips_won.append(pips_won_per_trade)
#     pips_lost_to_stop_loss.append(pips_lost_to_stop_loss_per_trade)
#     pips_to_lose_whole_investment.append(pips_to_lose_whole_investment_per_trade)
    
#     current_balance += profit  # Add profit to the current balance
#     cumulative_totals.append(current_balance)


# # Create DataFrame
# df = pd.DataFrame({
#     "Trade Number": trade_number,
#     "Initial Investment": initial_investments,
#     "Risk ($)": risks,
#     "Stop Loss ($)": stop_losses,
#     "Profit per Trade ($)": profits,
#     "Cumulative Total ($)": cumulative_totals,
#     "Lot Size (Micro Lots)": lot_sizes,
#     "Pips Won": pips_won,
#     "Pips Lost to Hit Stop Loss": pips_lost_to_stop_loss,
#     "Pips to Lose Whole Investment": pips_to_lose_whole_investment
# })

# # Save the DataFrame to a text file
# file_path = "C:/Users/Ahmad/Desktop/Trading_Plan_with_Updated_Lot_Sizes_and_Pips.csv"
# with open(file_path, 'w') as file:
#     file.write(df.to_string(index=False))

# print(f"File saved to {file_path}")

# # Function to calculate win and loss for a trade
# def calculate_trade_result(initial_investment, risk, lot_size, price_movement, is_win):
#     pip_value = lot_size * pip_value_micro_lot
#     if is_win:
#         profit = pip_value * price_movement
#         new_balance = initial_investment + profit
#     else:
#         loss = pip_value * price_movement
#         new_balance = initial_investment - loss
#     return new_balance

# # Function to calculate the number of pips you can lose before hitting the stop out
# def calculate_pips_survival(account_balance, lot_size_micro, pip_value_per_micro_lot=0.10):
#     """
#     Calculate the number of pips you can lose before hitting the stop out.

#     Parameters:
#     - account_balance: float, the current account balance in USD
#     - lot_size_micro: float, the position size in micro lots
#     - pip_value_per_micro_lot: float, the value of one pip per micro lot in USD (default is 0.10)

#     Returns:
#     - float, the number of pips you can lose before hitting the stop out
#     """
#     # Calculate pip value for the given lot size
#     pip_value = lot_size_micro * pip_value_per_micro_lot

#     # Calculate the number of pips you can survive
#     number_of_pips = account_balance / pip_value

#     return number_of_pips

# # Example usage
# account_balance_ = 72.00   # in USD
# lot_size_micro = 8  # in micro lots

# number_of_pips = calculate_pips_survival(account_balance_, lot_size_micro)
# print(f"With an account balance of ${account_balance_} and a position size of {lot_size_micro} micro lots, you can survive a loss of approximately {number_of_pips:.2f} pips before hitting the stop out.")




import math
import pandas as pd

# Define initial parameters
initial_investment = 60
# risk_percentage = 0.30
stop_loss_percentage = 0.30  # Stop loss percentage, the same as the risk percentage
target_amount = 30000
pip_value_micro_lot = 0.10  # Value of one pip in USD for a micro lot (0.01 lot)
initial_lot_size = 8  # Starting lot size
lot_size_increment = 2  # Increment value for lot size
fixed_pips = 50  # Fixed number of pips for profit calculation

# Initialize lists to store the table data
trade_number = []
initial_investments = []
risks = []
stop_losses = []
profits = []
cumulative_totals = []
lot_sizes = []
pips_won = []
pips_lost_to_stop_loss = []
pips_to_lose_whole_investment = []

# Function to calculate lot size based on risk amount
def calculate_lot_size(risk_amount, stop_loss_amount, pip_value_micro_lot):
    return round(risk_amount / (stop_loss_amount * pip_value_micro_lot), 2)

# Function to calculate profit based on fixed pips
def calculate_profit(lot_size, fixed_pips, pip_value_micro_lot):
    return round(lot_size * fixed_pips * pip_value_micro_lot, 2)

# Initial values
current_balance = initial_investment
trade_count = 0
current_lot_size = initial_lot_size

# Loop until the target amount is reached or until 100 trades
c=0
growth_factor = 1
while current_balance < target_amount and trade_count < 200:
    trade_count += 1
    trade_number.append(trade_count)
    initial_investments.append('$' + f'{round(current_balance,0)}')
    
    # risk_amount = round(current_balance * risk_percentage, 2)
    stop_loss_amount = round(current_balance * stop_loss_percentage, 2)  # Stop loss amount as a percentage of current balance
    
    # Increment the lot size incrementally with a logarithmic factor
    if trade_count > 1 :
        growth_factor = 1
        # current_lot_size = round(current_lot_size * (math.log(trade_count + 1) + 1) + lot_size_increment, 2)
        current_lot_size =  round(current_lot_size * (growth_factor ** trade_count)  * (trade_count ** 0.049), 2)
    

    profit = calculate_profit(current_lot_size, fixed_pips, pip_value_micro_lot)  # Calculate profit based on fixed pips
    
    # Calculate number of pips won
    pips_won_per_trade = fixed_pips
    
    # Calculate number of pips lost to hit stop loss
    pips_lost_to_stop_loss_per_trade = round(stop_loss_amount / (current_lot_size * pip_value_micro_lot), 2)
    
    # Calculate number of pips to lose whole investment
    pips_to_lose_whole_investment_per_trade = round(current_balance / (current_lot_size * pip_value_micro_lot), 2)
    
    # risks.append(risk_amount)
    stop_losses.append('$' + f'{stop_loss_amount}')
    profits.append('$' + f'{round(profit,0)}')  # Profit based on fixed pips
    lot_sizes.append((round(current_lot_size, 0))*0.01)
    pips_won.append(pips_won_per_trade)
    pips_lost_to_stop_loss.append(pips_lost_to_stop_loss_per_trade)
    pips_to_lose_whole_investment.append(pips_to_lose_whole_investment_per_trade)
    
    current_balance += profit  # Add profit to the current balance
    cumulative_totals.append('$' + f'{round(current_balance,0)}')


# Create DataFrame
df = pd.DataFrame({
    "Trade Number": trade_number,
    "Initial Investment": initial_investments,
    "Stop Loss ($)": stop_losses,
    "Profit per Trade ($)": profits,
    "Lot Size (Micro Lots)": lot_sizes,
    "Pips Won": pips_won,
    "Pips to Hit Stop Loss": pips_lost_to_stop_loss,
    "Pips to Stop Out": pips_to_lose_whole_investment,
    "Cumulative Total ($)": cumulative_totals
})

# Save the DataFrame to a CSV file
file_path = "C:/Users/Ahmad/Desktop/Trading_Plan_with_Logarithmic_Lot_Sizes.xlsx"
df.to_excel(file_path, index=False)

print(f"File saved to {file_path}")

# Function to calculate win and loss for a trade
def calculate_trade_result(initial_investment, risk, lot_size, price_movement, is_win):
    pip_value = lot_size * pip_value_micro_lot
    if is_win:
        profit = pip_value * price_movement
        new_balance = initial_investment + profit
    else:
        loss = pip_value * price_movement
        new_balance = initial_investment - loss
    return new_balance

# Function to calculate the number of pips you can lose before hitting the stop out
def calculate_pips_survival(account_balance, lot_size_micro, pip_value_per_micro_lot=0.10):
    """
    Calculate the number of pips you can lose before hitting the stop out.

    Parameters:
    - account_balance: float, the current account balance in USD
    - lot_size_micro: float, the position size in micro lots
    - pip_value_per_micro_lot: float, the value of one pip per micro lot in USD (default is 0.10)

    Returns:
    - float, the number of pips you can lose before hitting the stop out
    """
    # Calculate pip value for the given lot size
    pip_value = lot_size_micro * pip_value_per_micro_lot

    # Calculate the number of pips you can survive
    number_of_pips = account_balance / pip_value

    return number_of_pips

# Example usage
account_balance_ = 72.00   # in USD
lot_size_micro = 8  # in micro lots

number_of_pips = calculate_pips_survival(account_balance_, lot_size_micro)
print(f"With an account balance of ${account_balance_} and a position size of {lot_size_micro} micro lots, you can survive a loss of approximately {number_of_pips:.2f} pips before hitting the stop out.")
