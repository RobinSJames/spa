<template>
  <div class="px-1/12 lg:px-1/6 pt-1/12 md:pt-16">
    <div class="flex flex-col items-center">
      <h3 class="font-serif text-5xl">Availability</h3>
      <div class="w-40 h-tiny bg-teally mb-2"></div>
      <div class="w-16 h-tiny bg-medium-gray mb-10"></div>
    </div>
    <div class="flex flex-col md:flex-row">
      <div class="w-full md:w-1/2 p-1/12 md:pt-1/6">
        <InputFields v-model="date" type="date" class="mb-4" rounded />
        <AppButton
          label="CONFIRM DATE"
          variant="teally"
          class="rounded-lg"
          @clicked="requestAvailability"
        />
      </div>
      <div class="w-full md:w-1/2 p-1/12">
        <div class="flex flex-col items-center">
          <h3 class="font-serif text-2xl">Time Slots</h3>
          <div class="w-20 h-tiny bg-teally mb-2"></div>
        </div>
        <!-- {{ availability }} -->
        <div
          v-if="availability.count > 0"
          class="flex flex-wrap justify-between pt-4"
        >
          <AppButton
            v-for="(slot, index) in filterAvailableSlots(availability)"
            :key="index"
            :label="slot"
            variant="teally"
            class="w-2/5 rounded-lg mb-3"
          >
          </AppButton>
        </div>
        <div
          v-if="availability.count === 0"
          class="flex flex-wrap justify-between pt-4"
        >
          <AppButton
            v-for="(slot, index) in filterAvailableSlots(availability)"
            :key="index"
            :label="slot"
            variant="teally"
            class="w-2/5 rounded-lg mb-3"
          >
          </AppButton>
        </div>
        <div v-else-if="selectedDate === true && availability.length === 18">
          There are no available time slots for the date you selected.
        </div>
        <div v-else-if="selectedDate === null">
          Times appear here once have you have selected and confirmed a date.
        </div>
        <!-- <InputFields v-model="date" type="date" class="mb-4" rounded />
        <AppButton label="CONFIRM DATE" variant="teally" class="rounded-lg" /> -->
      </div>
    </div>
  </div>
</template>

<script>
import AppButton from '~/components/AppButton'
import InputFields from '~/components/InputFields'
const { TimeSlots } = require('../../../utils/timestamps')
export default {
  components: { InputFields, AppButton },
  async asyncData({ store }) {
    await store.dispatch('user/fetchItems')
  },
  data: () => ({
    date: null,
    selectedDate: null
  }),
  computed: {
    availability() {
      return this.$store.state.bookings.availability
    },
    loggedIn() {
      return this.$store.state.user.all
    }
  },
  methods: {
    async requestAvailability() {
      this.selectedDate = true
      await this.$store.dispatch('bookings/createAvailability', {
        scheduledDate: this.date
      })
    },
    filterAvailableSlots(x) {
      if (x.count > 0) {
        const allowedKeys = []
        x.slots.forEach((attr) => {
          allowedKeys.push(attr.timeSLot)
        })
        const filtered = Object.keys(TimeSlots)
          .filter((key) => !allowedKeys.includes(key))
          .reduce((obj, key) => {
            obj[key] = TimeSlots[key]
            return obj
          }, {})
        // for (const key of Object.keys(TimeSlots)) {
        //   x.forEach((element, index) => {
        //     if (x[index].timeSLot !== key) {
        //       const obj = {}
        //       obj[key] = TimeSlots[key]
        //       slots.push(obj)
        //     }
        //   })
        // }
        // const tempSlot
        // const filteredSlots = slots.forEach((value, index, self) => {
        //   console.log(self[index])
        //   return self.indexOf(value) === index
        // })
        return filtered
      } else {
        return TimeSlots
      }
    }
  }
}
</script>

<style></style>
