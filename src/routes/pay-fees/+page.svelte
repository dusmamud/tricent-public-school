<script lang="ts">
	import PageHero from '#lib/components/PageHero.svelte';
	import Reveal from '#lib/components/Reveal.svelte';
	import SectionHeading from '#lib/components/SectionHeading.svelte';
	import Icon from '#lib/components/Icon.svelte';
	import { feeByClass } from '#lib/data/more';

	// Step 1 — find fee
	let admNo = $state('');
	let cls = $state('');
	let transportOpted = $state(false);
	let errors = $state<Record<string, string>>({});
	let feeFound = $state(false);

	// Step 2 — mock payment
	let payMethod = $state<'upi' | 'card'>('upi');
	let upiId = $state('');
	let cardNumber = $state('');
	let expiry = $state('');
	let cvv = $state('');
	let payErrors = $state<Record<string, string>>({});
	let processing = $state(false);
	let paid = $state(false);
	let receiptNo = $state('');

	const termLabel = 'Apr – Jun 2027';
	const sessionLabel = '2027–28';
	const dueDate = '10 April 2027';

	const selectedFee = $derived(feeByClass.find((f) => f.cls === cls));
	const termMonths = $derived(selectedFee?.termMonths ?? 3);
	const tuitionTotal = $derived((selectedFee?.tuition ?? 0) * termMonths);
	const transportTotal = $derived(transportOpted ? (selectedFee?.transport ?? 0) * termMonths : 0);
	const total = $derived(tuitionTotal + transportTotal);

	function inr(n: number) {
		return `₹${n.toLocaleString('en-IN')}`;
	}

	function classLabel(c: string) {
		return c === 'Nursery' || c === 'KG' ? c : `Class ${c}`;
	}

	function submitFind(e: Event) {
		e.preventDefault();
		const errs: Record<string, string> = {};
		if (admNo.trim().length < 4) errs.admNo = 'Please enter a valid admission number (at least 4 characters).';
		if (!cls) errs.cls = 'Please select a class.';
		errors = errs;
		if (Object.keys(errs).length === 0) feeFound = true;
	}

	function submitPay(e: Event) {
		e.preventDefault();
		if (processing || paid) return;
		const errs: Record<string, string> = {};
		if (payMethod === 'upi') {
			if (!/^[\w.\-]{2,}@[a-zA-Z]{2,}$/.test(upiId.trim()))
				errs.upiId = 'Please enter a valid UPI ID, e.g. name@okhdfcbank.';
		} else {
			if (cardNumber.replace(/\D/g, '').length !== 16)
				errs.cardNumber = 'Please enter a valid 16-digit card number.';
			if (!/^(0[1-9]|1[0-2])\/\d{2}$/.test(expiry.trim()))
				errs.expiry = 'Please enter the expiry as MM/YY.';
			if (!/^\d{3}$/.test(cvv.trim())) errs.cvv = 'Please enter the 3-digit CVV.';
		}
		payErrors = errs;
		if (Object.keys(errs).length > 0) return;
		processing = true;
		setTimeout(() => {
			receiptNo = `TPS-2026-${String(Date.now()).slice(-6)}`;
			processing = false;
			paid = true;
		}, 1200);
	}

	function resetAll() {
		admNo = '';
		cls = '';
		transportOpted = false;
		errors = {};
		feeFound = false;
		payMethod = 'upi';
		upiId = '';
		cardNumber = '';
		expiry = '';
		cvv = '';
		payErrors = {};
		processing = false;
		paid = false;
		receiptNo = '';
	}
</script>

<PageHero
	title="Pay Fees Online"
	subtitle="Find your term fee by admission number, then pay by UPI or card. This is a demonstration page — no real payment is processed and no payment details are stored."
	crumb={[{ label: 'Home', href: '/' }, { label: 'Admissions', href: '/admissions' }, { label: 'Pay Fees Online' }]}
/>

<div class="mx-auto max-w-3xl px-4 py-14 sm:px-6 lg:px-8">
	<!-- Demo banner -->
	<Reveal>
		<div
			class="flex items-start gap-3 rounded-xl border border-gold-500/50 bg-gold-500/10 px-5 py-4"
			role="alert"
		>
			<Icon name="alert-circle" cls="mt-0.5 h-5 w-5 shrink-0 text-gold-600" />
			<p class="text-sm leading-relaxed text-forest-900">
				<strong>Demo payment page — no real money is collected.</strong> This is a client-presentation
				mock. Do not enter real UPI IDs or card details here; use any sample values in the correct
				format.
			</p>
		</div>
	</Reveal>

	{#if paid}
		<!-- Success screen -->
		<Reveal>
			<div class="mt-10 rounded-xl border border-forest-700/30 bg-white p-8 text-center shadow-sm">
				<span
					class="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-forest-50 text-forest-800"
				>
					<Icon name="check" cls="h-8 w-8" />
				</span>
				<h2 class="mt-4 font-display text-2xl font-bold text-forest-900 sm:text-3xl">
					Payment Successful (Demo)
				</h2>
				<p class="mx-auto mt-2 max-w-md text-sm leading-relaxed text-ink/65">
					This is a mock receipt only — no money was charged and no payment was processed.
				</p>
				<dl
					class="mx-auto mt-7 max-w-md space-y-3 rounded-xl bg-cream px-5 py-5 text-left text-sm"
				>
					<div class="flex items-center justify-between gap-3">
						<dt class="font-bold text-ink/70">Receipt No.</dt>
						<dd class="font-bold text-forest-900">{receiptNo}</dd>
					</div>
					<div class="flex items-center justify-between gap-3">
						<dt class="font-bold text-ink/70">Amount Paid</dt>
						<dd class="font-display text-xl font-bold text-forest-900">{inr(total)}</dd>
					</div>
					<div class="flex items-center justify-between gap-3">
						<dt class="font-bold text-ink/70">Admission No.</dt>
						<dd class="font-bold text-forest-900">{admNo.trim().toUpperCase()}</dd>
					</div>
					<div class="flex items-center justify-between gap-3">
						<dt class="font-bold text-ink/70">Class</dt>
						<dd class="font-bold text-forest-900">{classLabel(cls)}</dd>
					</div>
					<div class="flex items-center justify-between gap-3">
						<dt class="font-bold text-ink/70">Session</dt>
						<dd class="font-bold text-forest-900">{sessionLabel}</dd>
					</div>
					<div class="flex items-center justify-between gap-3">
						<dt class="font-bold text-ink/70">Term</dt>
						<dd class="font-bold text-forest-900">{termLabel}</dd>
					</div>
					<div class="flex items-center justify-between gap-3">
						<dt class="font-bold text-ink/70">Paid Via</dt>
						<dd class="font-bold text-forest-900">{payMethod === 'upi' ? 'UPI' : 'Card'}</dd>
					</div>
				</dl>
				<button
					type="button"
					onclick={resetAll}
					class="mt-7 inline-flex min-h-12 items-center justify-center gap-2 rounded-sm bg-forest-900 px-6 text-sm font-extrabold text-white transition hover:bg-forest-800"
				>
					Pay Another Fee
				</button>
			</div>
		</Reveal>
	{:else}
		<!-- Step 1 -->
		<Reveal>
			<div class="mt-10">
				<SectionHeading eyebrow="Step 1 of 2" text="Enter the admission number and class to see the fee due for the current term.">
					Find Your <span class="text-gold-600 italic">Fee</span>
				</SectionHeading>
			</div>
		</Reveal>

		<Reveal>
			<form
				class="mt-8 rounded-xl border border-forest-900/10 bg-white p-6 shadow-sm sm:p-8"
				onsubmit={submitFind}
				novalidate
			>
				<div class="grid gap-5 sm:grid-cols-2">
					<div>
						<label for="adm-no" class="mb-1.5 block text-sm font-bold text-forest-900">
							Admission Number *
						</label>
						<input
							id="adm-no"
							type="text"
							bind:value={admNo}
							placeholder="e.g. TPS20270124"
							autocomplete="off"
							class="w-full rounded-md border border-forest-900/20 px-4 py-3 text-sm uppercase focus:border-forest-700 focus:outline-none"
						/>
						{#if errors.admNo}<p class="mt-1.5 text-xs text-red-600">{errors.admNo}</p>{/if}
					</div>
					<div>
						<label for="fee-class" class="mb-1.5 block text-sm font-bold text-forest-900">
							Class *
						</label>
						<select
							id="fee-class"
							bind:value={cls}
							class="w-full rounded-md border border-forest-900/20 bg-white px-4 py-3 text-sm focus:border-forest-700 focus:outline-none"
						>
							<option value="" disabled>Select class</option>
							{#each feeByClass as f}
								<option value={f.cls}>{classLabel(f.cls)}</option>
							{/each}
						</select>
						{#if errors.cls}<p class="mt-1.5 text-xs text-red-600">{errors.cls}</p>{/if}
					</div>
				</div>
				<label
					class="mt-5 flex min-h-11 cursor-pointer items-center gap-3 rounded-md border border-forest-900/10 bg-cream px-4 py-3 text-sm"
				>
					<input type="checkbox" bind:checked={transportOpted} class="h-5 w-5 accent-forest-800" />
					<span>
						<span class="font-bold text-forest-900">Include school transport</span>
						<span class="text-ink/70"> — ₹1,200 per month (optional)</span>
					</span>
				</label>
				<button
					type="submit"
					class="mt-6 inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-sm bg-forest-900 px-6 text-sm font-extrabold text-white transition hover:bg-forest-800 sm:w-auto"
				>
					<Icon name="calculator" cls="h-4 w-4 text-gold-400" />
					Find Fee
				</button>
			</form>
		</Reveal>

		{#if feeFound && selectedFee}
			<!-- Fee summary -->
			<Reveal>
				<div class="mt-8 rounded-xl border border-forest-900/10 bg-white p-6 shadow-sm sm:p-8">
					<div class="flex items-start justify-between gap-3">
						<div>
							<p class="text-xs font-extrabold tracking-[0.25em] text-gold-700 uppercase">
								Fee Summary · Session {sessionLabel} · Term {termLabel}
							</p>
							<h3 class="mt-2 font-display text-2xl font-bold text-forest-900">
								Admission No. {admNo.trim().toUpperCase()} · {classLabel(cls)}
							</h3>
						</div>
						<span
							class="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-forest-50 text-forest-800"
						>
							<Icon name="file" cls="h-6 w-6" />
						</span>
					</div>
					<dl class="mt-6 space-y-3 border-t border-forest-900/10 pt-5 text-sm">
						<div class="flex items-center justify-between gap-3">
							<dt class="text-ink/70">Tuition — {inr(selectedFee.tuition)} × {termMonths} months</dt>
							<dd class="font-bold text-forest-900">{inr(tuitionTotal)}</dd>
						</div>
						{#if transportOpted}
							<div class="flex items-center justify-between gap-3">
								<dt class="text-ink/70">Transport — {inr(selectedFee.transport)} × {termMonths} months</dt>
								<dd class="font-bold text-forest-900">{inr(transportTotal)}</dd>
							</div>
						{:else}
							<div class="flex items-center justify-between gap-3">
								<dt class="text-ink/70">Transport</dt>
								<dd class="font-bold text-forest-900">Not opted</dd>
							</div>
						{/if}
						<div
							class="flex items-center justify-between gap-3 border-t border-forest-900/10 pt-4 text-base"
						>
							<dt class="font-bold text-forest-900">Total Payable</dt>
							<dd class="font-display text-2xl font-bold text-forest-900">{inr(total)}</dd>
						</div>
						<div class="flex items-center justify-between gap-3">
							<dt class="text-ink/70">Due Date</dt>
							<dd class="font-bold text-forest-900">{dueDate}</dd>
						</div>
					</dl>
					<p class="mt-4 text-xs text-ink/70">
						Tuition matches the fee structure on the Admissions page. A 10% sibling concession on
						tuition applies to the second sibling — please contact the accounts office to apply it.
					</p>
				</div>
			</Reveal>

			<!-- Step 2 -->
			<Reveal>
				<div class="mt-10">
					<SectionHeading eyebrow="Step 2 of 2" text="Choose a payment method. This is a mock — nothing is charged and no payment details are sent or stored.">
						Mock <span class="text-gold-600 italic">Payment</span>
					</SectionHeading>
				</div>
			</Reveal>

			<Reveal>
				<form
					class="mt-8 rounded-xl border border-forest-900/10 bg-white p-6 shadow-sm sm:p-8"
					onsubmit={submitPay}
					novalidate
				>
					<div class="flex flex-wrap gap-2" role="tablist" aria-label="Payment method">
						<button
							type="button"
							role="tab"
							aria-selected={payMethod === 'upi'}
							onclick={() => {
								payMethod = 'upi';
								payErrors = {};
							}}
							class="min-h-11 rounded-full px-5 text-sm font-extrabold tracking-wide transition {payMethod ===
							'upi'
								? 'bg-forest-900 text-gold-400'
								: 'border border-forest-900/20 text-forest-900 hover:bg-forest-50'}"
						>
							UPI
						</button>
						<button
							type="button"
							role="tab"
							aria-selected={payMethod === 'card'}
							onclick={() => {
								payMethod = 'card';
								payErrors = {};
							}}
							class="min-h-11 rounded-full px-5 text-sm font-extrabold tracking-wide transition {payMethod ===
							'card'
								? 'bg-forest-900 text-gold-400'
								: 'border border-forest-900/20 text-forest-900 hover:bg-forest-50'}"
						>
							Card
						</button>
					</div>

					{#if payMethod === 'upi'}
						<div class="mt-6">
							<label for="upi-id" class="mb-1.5 block text-sm font-bold text-forest-900">
								UPI ID *
							</label>
							<input
								id="upi-id"
								type="text"
								bind:value={upiId}
								placeholder="e.g. name@okhdfcbank"
								autocomplete="off"
								class="w-full rounded-md border border-forest-900/20 px-4 py-3 text-sm focus:border-forest-700 focus:outline-none"
							/>
							{#if payErrors.upiId}<p class="mt-1.5 text-xs text-red-600">{payErrors.upiId}</p>{/if}
							<p class="mt-1.5 text-xs text-ink/70">
								Demo only — enter a sample UPI ID in the format name@bank, never a real one.
							</p>
						</div>
					{:else}
						<div class="mt-6 grid gap-5 sm:grid-cols-2">
							<div class="sm:col-span-2">
								<label for="card-number" class="mb-1.5 block text-sm font-bold text-forest-900">
									Card Number *
								</label>
								<input
									id="card-number"
									type="text"
									inputmode="numeric"
									bind:value={cardNumber}
									placeholder="1234 5678 9012 3456"
									autocomplete="off"
									class="w-full rounded-md border border-forest-900/20 px-4 py-3 text-sm focus:border-forest-700 focus:outline-none"
								/>
								{#if payErrors.cardNumber}<p class="mt-1.5 text-xs text-red-600">{payErrors.cardNumber}</p>{/if}
							</div>
							<div>
								<label for="expiry" class="mb-1.5 block text-sm font-bold text-forest-900">
									Expiry (MM/YY) *
								</label>
								<input
									id="expiry"
									type="text"
									inputmode="numeric"
									bind:value={expiry}
									placeholder="MM/YY"
									autocomplete="off"
									class="w-full rounded-md border border-forest-900/20 px-4 py-3 text-sm focus:border-forest-700 focus:outline-none"
								/>
								{#if payErrors.expiry}<p class="mt-1.5 text-xs text-red-600">{payErrors.expiry}</p>{/if}
							</div>
							<div>
								<label for="cvv" class="mb-1.5 block text-sm font-bold text-forest-900">
									CVV *
								</label>
								<input
									id="cvv"
									type="password"
									inputmode="numeric"
									bind:value={cvv}
									placeholder="3 digits"
									autocomplete="off"
									class="w-full rounded-md border border-forest-900/20 px-4 py-3 text-sm focus:border-forest-700 focus:outline-none"
								/>
								{#if payErrors.cvv}<p class="mt-1.5 text-xs text-red-600">{payErrors.cvv}</p>{/if}
							</div>
						</div>
						<p class="mt-4 flex items-start gap-2 text-xs leading-relaxed text-ink/70">
							<Icon name="lock" cls="mt-0.5 h-4 w-4 shrink-0 text-forest-700" />
							Demo only — never enter a real card number, expiry or CVV. Nothing you type here is
							sent anywhere or stored.
						</p>
					{/if}

					<button
						type="submit"
						disabled={processing}
						class="mt-7 inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-sm bg-forest-900 px-6 text-sm font-extrabold text-white transition hover:bg-forest-800 disabled:cursor-not-allowed disabled:opacity-60"
					>
						{#if processing}
							Processing (Demo)…
						{:else}
							<Icon name="lock" cls="h-4 w-4 text-gold-400" />
							Pay {inr(total)} (Demo)
						{/if}
					</button>
					<p class="mt-3 text-center text-xs text-ink/70">
						No payment is processed. Prefer offline payment? Pay at the accounts office
						(Mon – Sat, 9:00 AM – 1:00 PM) or call
						<a href="tel:+917544000044" class="font-bold text-forest-800">+91 75440 00044</a>.
					</p>
				</form>
			</Reveal>
		{/if}
	{/if}

	<Reveal>
		<p class="mt-12 rounded-xl border border-forest-900/10 bg-cream px-6 py-5 text-sm leading-relaxed text-ink/70">
			All fees, classes and receipt numbers on this page are demo figures for client presentation.
			Please confirm the current fee schedule at the school office before making any real payment.
		</p>
	</Reveal>
</div>
