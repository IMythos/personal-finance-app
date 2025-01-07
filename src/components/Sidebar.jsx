import iconHome from "../assets/images/icon-nav-overview.svg";
import iconArrowTransactions from "../assets/images/icon-nav-transactions.svg";
import iconBudgets from "../assets/images/icon-nav-budgets.svg";
import iconPots from "../assets/images/icon-nav-pots.svg";
import iconRecurringBills from "../assets/images/icon-nav-recurring-bills.svg";

function Sidebar() {
    return(
        <div className="sidebar">
            <div>
                <h1>Finance</h1>
            </div>
            <nav className="sidebar__container">
                <ul className="sidebar__menu">
                    <li className="sidebar__item">
                        <div className="sidebar__icon">
                            <img src={iconHome} />
                        </div>
                        <a>Overview</a>
                    </li>
                    <li className="sidebar__item">
                        <div className="sidebar__icon">
                            <img src={iconArrowTransactions} />
                        </div>
                        <a>Transactions</a>
                    </li>
                    <li className="sidebar__item">
                        <div className="sidebar__icon">
                            <img src={iconBudgets} />
                        </div>
                        <a>Budgets</a>
                    </li>
                    <li className="sidebar__item">
                        <div className="sidebar__icon">
                            <img src={iconPots} />
                        </div>
                        <a>Pots</a>
                    </li>
                    <li className="sidebar__item">
                        <div className="sidebar__icon">
                            <img src={iconRecurringBills} />
                        </div>
                        <a>Recurring bills</a>
                    </li>
                </ul>
            </nav>
        </div>
    );
}

export default Sidebar;