import { formatAmount } from "@/lib/utils";

import AnimatedCounter from "./AnimatedCounter";
import DoughnutChart from "./DoughnutChart";

const TotalBalanceBox = ({
  accounts = [],
  totalBanks,
  totalCurrentBalance,
}: TotlaBalanceBoxProps) => {
  return (
    <div className="total-balance">
      <div className="total-balance-chart">
        <DoughnutChart accounts={accounts} />
      </div>

      <div className="flex flex-col gap-6">
        <h2 className="header-2">Bank Accounts: {totalBanks}</h2>
        <div className="flex flex-col gap-2">
          <p className="total-balance-label">Total Current Balance</p>

          <div className="total-balance-amount flex-center gap-2">
            <AnimatedCounter
              value={totalCurrentBalance}
              duration={2.75}
              prefix="$"
              decimals={2}
            />
            {/* {formatAmount(totalCurrentBalance)} */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TotalBalanceBox;