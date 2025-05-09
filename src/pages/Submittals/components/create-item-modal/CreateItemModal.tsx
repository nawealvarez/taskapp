import Button from '@/components/button/Button';
import { Input } from '@/components/ui/input';
import {
  formSchema,
  type CreateItemModalProps,
  type FormValues,
} from './CreateItemModal.types';
import { Checkbox } from '@/components/ui/checkbox';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import Modal from '@/components/modal/Modal';
import { Form, FormControl, FormField, FormLabel } from '@/components/ui/form';
import FormItem from '@/components/formItem/FormItem';
import Select from '@/components/select/Select';
import {
  defaultFormValues,
  priorityOptions,
  responseOptions,
  statusOptions,
} from './CreateItemModal.constants';
import { create } from '@/services/item';
import { toast } from 'sonner';
import { useItemsContext } from '@/context/items-context';

function CreateItemModal({ open, onClose }: CreateItemModalProps) {
  const { setItems } = useItemsContext();
  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: defaultFormValues,
  });

  const onSubmit = async (values: FormValues) => {
    try {
      const res = await create(values);
      console.log('res', res);
      if (res) {
        setItems((prev) => [...prev, res]);
      }

      //if (!values.createAnother) {
      //  onClose();
      //}

      form.reset();
      toast.success(`Item with ID ${res.id} created successfully!`);
    } catch (error) {
      toast.error('Error creating item', {
        description: error as string,
      });
    }
  };
  return (
    <Modal
      open={open}
      onClose={onClose}
      title="Create Item"
      description="General info"
    >
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4 mt-4">
          <FormField
            control={form.control}
            name="spec"
            render={({ field }) => (
              <FormItem label="Spec section" required>
                <Input {...field} placeholder="Enter spec section" />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="title"
            render={({ field }) => (
              <FormItem label="Title" required>
                <Input {...field} />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="type"
            render={({ field }) => (
              <FormItem label="Type" required>
                <Input {...field} placeholder="Enter a type" />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="package"
            render={({ field }) => (
              <FormItem label="Package">
                <Input {...field} placeholder="Enter package or leave -" />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="ballInCourt"
            render={({ field }) => (
              <FormItem label="Ball in court">
                <Input {...field} placeholder="Enter responsible person" />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="dueDate"
            render={({ field }) => (
              <FormItem label="Due date">
                <Input type="date" {...field} />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="status"
            render={({ field }) => (
              <FormItem label="Status" formControl={false} required>
                <Select
                  onChange={field.onChange}
                  defaultValue={field.value}
                  placeholder="Select status"
                  values={statusOptions}
                />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="priority"
            render={({ field }) => (
              <FormItem label="Priority" formControl={false} required>
                <Select
                  onChange={field.onChange}
                  defaultValue={field.value}
                  placeholder="Select priority"
                  values={priorityOptions}
                />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="response"
            render={({ field }) => (
              <FormItem label="Response" formControl={false} required>
                <Select
                  onChange={field.onChange}
                  defaultValue={field.value}
                  placeholder="Select response"
                  values={responseOptions}
                />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="createAnother"
            render={({ field }) => (
              <FormItem
                className="flex flex-row items-start space-x-2 space-y-0"
                formControl={false}
              >
                <>
                  <FormControl>
                    <Checkbox
                      checked={field.value}
                      onCheckedChange={field.onChange}
                      className="checkbox"
                    />
                  </FormControl>
                  <div className="space-y-1 leading-none">
                    <FormLabel className="text-sm font-normal">
                      Create another
                    </FormLabel>
                  </div>
                </>
              </FormItem>
            )}
          />

          <div className="flex justify-end gap-2 pt-4">
            <Button type="button" variant="outline" onClick={onClose}>
              Cancel
            </Button>
            <Button type="submit">Create</Button>
          </div>
        </form>
      </Form>
    </Modal>
  );
}

CreateItemModal.displayName = 'CreateItemModal';
export default CreateItemModal;
