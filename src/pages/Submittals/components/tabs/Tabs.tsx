import {
  Tabs as ShadcnTabs,
  TabsList,
  TabsTrigger,
  TabsContent,
} from '@/components/ui/tabs';
import styles from './Tabs.module.scss';
import { tabs } from '../../Submittals.constants';
import ItemTable from '../item-table/ItemTable';

function Tabs() {
  return (
    <ShadcnTabs defaultValue="items" className={styles.tabs}>
      <div className={styles.tabs__wrapper}>
        <TabsList className={styles.tabs__list}>
          {tabs.map((tab) => (
            <TabsTrigger
              key={tab.value}
              value={tab.value}
              className={styles.tabs__trigger}
              
              disabled={tab.disabled}
            >
              {tab.label}
            </TabsTrigger>
          ))}
        </TabsList>
      </div>
      <TabsContent value="items">
        <ItemTable />
      </TabsContent>
      <TabsContent value="packages">
        <div className="p-4 text-muted-foreground">No packages yet</div>
      </TabsContent>
    </ShadcnTabs>
  );
}

Tabs.displayName = 'Tabs';
export default Tabs;
