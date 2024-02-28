import { Dialog, Transition } from "@headlessui/react";
import { Fragment } from "react";

const DiscountModal = ({ isOpen, setIsOpen, setDiscount }) => {
  // close modal
  function closeModal() {
    setIsOpen(false);
  }

  const handleDiscountSubmit = (e) => {
    e.preventDefault();
    const discountStr = e.target.discount.value;
    const discountNum = parseFloat(discountStr);
    setDiscount(discountNum);
    setIsOpen(false);
  };

  return (
    <Transition appear show={isOpen} as={Fragment}>
      <Dialog as="div" className="relative z-10" onClose={closeModal}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black/25" />
        </Transition.Child>

        <div className="fixed inset-0 overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4 text-center">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-lg bg-white p-6 text-left align-middle shadow-xl transition-all">
                <Dialog.Title
                  as="h3"
                  className="text-lg font-medium leading-6 text-gray-600"
                >
                  Discount
                </Dialog.Title>
                <div className="mt-4 text-gray-500">
                  <div>
                    <span className="mr-5">Discount Type:</span>
                    <span>Flat</span>
                  </div>
                  <form onSubmit={handleDiscountSubmit}>
                    <div className="my-4">
                      <span className="mr-4">Amount:</span>
                      <input
                        className="rounded px-3 py-1 font-medium outline outline-[1px] outline-gray-300"
                        name="discount"
                        type="number"
                      />
                    </div>
                    <hr />
                    <div className="mt-4 flex items-center justify-end space-x-4">
                      <button
                        type="reset"
                        onClick={closeModal}
                        className="close-btn"
                      >
                        Close
                      </button>
                      <button type="submit" className="submit-btn">
                        Submit
                      </button>
                    </div>
                  </form>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
};

export default DiscountModal;
